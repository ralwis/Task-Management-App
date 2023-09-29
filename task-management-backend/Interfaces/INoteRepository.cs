using task_management_backend.Models;

namespace task_management_backend.Interfaces
{
    public interface INoteRepository
    {
        Task<IEnumerable<Note>> GetNoteByUserId(int Id);
        void UpdateNote(Note note);

        Task<Note> FindNote(int Id);
    }
}
