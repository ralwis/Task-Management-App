using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using task_management_backend.Models;

namespace task_management_backend.Dtos
{
    public class JobDto
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public int Priority { get; set; }
        public string? Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int Status { get; set; }
    }
}
