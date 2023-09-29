using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using task_management_backend.Dtos;
using task_management_backend.Interfaces;
using task_management_backend.Models;

namespace task_management_backend.Controllers
{
    [Authorize]
    public class JobController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public JobController(IUnitOfWork uow, IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetJobs()
        {
            var jobs = await uow.JobRepository.GetJobsAsync();

            var jobsDto = mapper.Map<IEnumerable<JobDto>>(jobs);
            return Ok(jobsDto);
        }

        //api/job/get/Id
        [HttpGet("get/{Id}")]
        public async Task<IActionResult> GetJobsByUserId(int Id)
        {
            var userId = GetUserId();
            if(userId != Id)
            {
                return BadRequest(404);
            }

            var jobs = await uow.JobRepository.GetJobsByUserId(userId);

            var jobsDto = mapper.Map<IEnumerable<JobDto>>(jobs);
            return Ok(jobsDto);
        }

        //api/job/get/status/Id/statusId
        [HttpGet("get/status/{Id}/{statusId}")]
        public async Task<IActionResult> GetJobsByStatusId(int Id, int statusId)
        {
            var userId = GetUserId();
            if (userId != Id)
            {
                return BadRequest(404);
            }

            var jobs = await uow.JobRepository.GetJobsByStatusId(Id, statusId);

            var jobsDto = mapper.Map<IEnumerable<JobDto>>(jobs);
            return Ok(jobsDto);
        }


        [HttpPost("post")]
        public async Task<IActionResult> AddJob(JobDto jobDto)
        {
            var job = mapper.Map<Job>(jobDto);
            var userId = GetUserId();
            job.CreatedBy = userId;
            job.UpdatedBy = userId;
            job.UpdatedOn = DateTime.Now;

            uow.JobRepository.AddJob(job);
            await uow.SaveAsync();
            return StatusCode(201);
        }

        [HttpPut("update/{Id}/{jobId}")]
        public async Task<IActionResult> UpdateJob(int Id, int jobId, JobDto jobDto)
        {
            var userId = GetUserId();
            if (userId != Id)
            {
                return BadRequest(404);
            }

            var jobFromDb = await uow.JobRepository.FindJob(Id, jobId);

            mapper.Map(jobDto, jobFromDb);
            await uow.SaveAsync();
            return StatusCode(200);
        }



        [HttpDelete("delete/{Id}/{jobId}")]
        public async Task<IActionResult> DeleteJob(int Id, int jobId)
        {
            var userId = GetUserId();
            if (userId != Id)
            {
                return BadRequest(404);
            }

            uow.JobRepository.DeleteJob(Id, jobId);
            await uow.SaveAsync();
            return Ok(jobId);
        }
    }
}
