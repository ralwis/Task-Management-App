using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace task_management_backend.Models
{
    public class Job : BaseEntity
    {
        [Required]
        public string Name { get; set; }
        public int Priority { get; set; }
        public string? Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int Status { get; set; }
        public DateTime UpdatedOn { get; set; }
        [ForeignKey("User")]
        public int CreatedBy {  get; set; }
        public User User { get; set; }
    }
}
