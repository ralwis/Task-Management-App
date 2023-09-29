using task_management_backend.Models;

namespace task_management_backend.Interfaces
{
    public interface IJobRepository
    {
        Task<IEnumerable<Job>> GetJobsAsync();
        Task<IEnumerable<Job>> GetJobsByUserId(int userId);
        Task<IEnumerable<Job>> GetJobsByStatusId(int Id, int statusId);
        void AddJob(Job job);
        void DeleteJob(int Id, int jobId);
        Task<Job> FindJob(int Id, int jobId);
    }
}
