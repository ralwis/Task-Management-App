namespace task_management_backend.Models
{
    public class BaseEntity
    {
        public int Id { get; set; }
        public DateTime UpdatedOn { get; set; } = DateTime.Now;
        public int UpdatedBy { get; set; }
    }
}
