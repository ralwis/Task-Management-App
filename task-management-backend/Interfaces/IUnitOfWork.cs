namespace task_management_backend.Interfaces
{
    public interface IUnitOfWork
    {
        IJobRepository JobRepository { get; }
        IUserRepository UserRepository { get; }
        INoteRepository NoteRepository { get; }
        Task<bool> SaveAsync();
    }
}
