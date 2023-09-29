using Microsoft.EntityFrameworkCore;
using task_management_backend.Interfaces;
using task_management_backend.Models;

namespace task_management_backend.Data.Repo
{
    public class NoteRepository : INoteRepository
    {
        private readonly DataContext dc;

        public NoteRepository(DataContext dc)
        {
            this.dc = dc;
        }

        public void UpdateNote(Note note)
        {
            dc.Notes.Add(note);
        }

        public async Task<IEnumerable<Note>> GetNoteByUserId(int Id)
        {
            return await dc.Notes.Where(x => x.CreatedBy == Id).ToListAsync();
         
        }

        public async Task<Note> FindNote(int Id)
        {
            return await dc.Notes.FirstOrDefaultAsync(x => x.CreatedBy == Id);
        
        }
    }
}
