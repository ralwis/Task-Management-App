using task_management_backend.Data.Repo;
using task_management_backend.Interfaces;

namespace task_management_backend.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext dc;

        public UnitOfWork(DataContext dc)
        {
            this.dc = dc;
        }

        public IJobRepository JobRepository => 
            new JobRepository(dc);

        public IUserRepository UserRepository =>
            new UserRepository(dc);

        public INoteRepository NoteRepository =>
            new NoteRepository(dc);
        public async Task<bool> SaveAsync()
        {
            return await dc.SaveChangesAsync() > 0;
        }
    }
}
