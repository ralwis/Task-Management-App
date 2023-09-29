using AutoMapper;
using task_management_backend.Dtos;
using task_management_backend.Models;

namespace task_management_backend.Helper
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles() 
        {
            CreateMap<Job, JobDto>().ReverseMap();
            CreateMap<Note, NoteDto>().ReverseMap();
        }
    }
}
