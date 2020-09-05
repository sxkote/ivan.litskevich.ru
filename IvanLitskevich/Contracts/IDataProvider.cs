using IvanLitskevich.Models;

namespace IvanLitskevich.Contracts
{
    public interface IDataProvider
    {
        public DataModel GetData(string lang = null);
    }
}
