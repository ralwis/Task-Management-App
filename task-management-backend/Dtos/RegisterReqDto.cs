using System.ComponentModel.DataAnnotations;

namespace task_management_backend.Dtos
{
    public class RegisterReqDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
