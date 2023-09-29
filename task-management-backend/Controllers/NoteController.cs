using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using task_management_backend.Dtos;
using task_management_backend.Interfaces;
using task_management_backend.Models;

namespace task_management_backend.Controllers
{
    [Authorize]
    public class NoteController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public NoteController(IUnitOfWork uow, IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;
        }

        // api/Note/get/Id
        [HttpGet("get/{Id}")]
        public async Task<IActionResult> GetNoteByUserId(int Id)
        {
            var userId = GetUserId();
            if (userId != Id)
            {
                return BadRequest(404);
            }

            var note = await uow.NoteRepository.GetNoteByUserId(Id);

            var noteDto = mapper.Map<IEnumerable<NoteDto>>(note);
            return Ok(noteDto);
        }

        // api/Note/post
        [HttpPost("post")]
        public async Task<IActionResult> AddNote(NoteDto noteDto)
        {

            var note = mapper.Map<Note>(noteDto);
            var userId = GetUserId();
            note.CreatedBy = userId;
            note.UpdatedBy = userId;
            note.UpdatedOn = DateTime.Now;

            var noteFromDb = await uow.NoteRepository.FindNote(userId);
            if(noteFromDb == null)
            {
                uow.NoteRepository.UpdateNote(note);
                await uow.SaveAsync();
                return StatusCode(201);
            }
            else
            {
                mapper.Map(noteDto, noteFromDb);
                await uow.SaveAsync();
                return StatusCode(200);
            }

            
        }
    }
}
