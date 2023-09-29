using Microsoft.EntityFrameworkCore;
using task_management_backend.Interfaces;
using task_management_backend.Models;

namespace task_management_backend.Data.Repo
{
    public class JobRepository : IJobRepository
    {
        private readonly DataContext dc;

        public JobRepository(DataContext dc)
        {
            this.dc = dc;
        }
        public void AddJob(Job job)
        {
            dc.Jobs.Add(job);
        }

        public void DeleteJob(int Id, int jobId)
        {
            var job = dc.Jobs.FirstOrDefault(x => x.CreatedBy == Id && x.Id == jobId);

            if (job != null)
            {
                dc.Jobs.Remove(job);
    
            }

     
        }
        public async Task<Job> FindJob(int Id, int jobId)
        {
            return await dc.Jobs.FirstOrDefaultAsync(x => x.CreatedBy == Id && x.Id == jobId);
   
        }


        public async Task<IEnumerable<Job>> GetJobsAsync()
        {
            return await dc.Jobs.ToListAsync();
        }

        public async Task<IEnumerable<Job>> GetJobsByStatusId(int Id, int statusId)
        {
            return await dc.Jobs.Where(x =>x.CreatedBy == Id && x.Status == statusId).ToListAsync();
        }

        public async Task<IEnumerable<Job>> GetJobsByUserId(int userId)
        {
            return await dc.Jobs.Where(x => x.CreatedBy == userId).ToListAsync();
        }
    }
}
