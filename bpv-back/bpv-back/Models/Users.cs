namespace bpv_back.Models
{
    public class Users
    {
        public required int Id { get; set; }
        public required string Name { get; set; }

        public required string Email { get; set; }

        public string? Summary { get; set; }
    }
}
