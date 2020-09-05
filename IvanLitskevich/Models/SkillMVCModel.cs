using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IvanLitskevich.Models
{
    public class SkillMVCModel
    {
        public SkillMVCModel(SkillModel skill, string color)
        {
            Skill = skill;
            Color = color;
        }

        public SkillModel Skill { get; }
        public string Color { get; }
    }
}
