using task_management_backend.Models;

namespace task_management_backend.Interfaces
{
    public interface IUserRepository
    {
        Task<User> Authenticate(string email, string password);
        void Register(string name, string email, string password);
        Task<bool> UserAlreadyExist(string email);
    }
}
