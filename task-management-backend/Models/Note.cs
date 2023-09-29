using System.ComponentModel.DataAnnotations.Schema;

namespace task_management_backend.Models
{
    public class Note : BaseEntity
    {
        public string Description { get; set; }
        [ForeignKey("User")]
        public int CreatedBy { get; set; }
        public User User { get; set; }
    }
}
