using IvanLitskevich.Contracts;
using IvanLitskevich.Models;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.IO;
using System.Text.Json;

namespace IvanLitskevich.Services
{
    public class DataProvider : IDataProvider
    {
        private const string DEFAULT_FOLDER = "data/";
        private const string DEFAULT_LANG = "en";


        private readonly IWebHostEnvironment _environment;

        public DataProvider(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        public DataModel GetData(string lang = null)
        {
            var filename = $"{_environment.WebRootPath}/{DEFAULT_FOLDER}/cv-{lang ?? DEFAULT_LANG}.json";

            var jsonSettings = new JsonSerializerSettings()
            {
                ContractResolver = new DefaultContractResolver()
                {
                    NamingStrategy = new CamelCaseNamingStrategy()
                }
            };

            return JsonConvert.DeserializeObject<DataModel>(File.ReadAllText(filename), jsonSettings);
        }
    }
}
