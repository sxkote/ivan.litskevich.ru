export class DataModel {
  public info: InfoModel = new InfoModel();
  public experiences: ExperienceModel[] = [];
  public skills: SkillsModel = new SkillsModel();
  public education: EducationModel = new EducationModel();
  public certifications: CertificationModel[] = [];
  public translations: TranslationModel = new TranslationModel();
}

export class InfoModel {
  public name: string = "";
  public title: string = "";
  public titles: string[] = [];
  public url: string = "";
  public address: string = "";
  public phone: string = "";
  public email: string = "";
  public skype: string = "";
  public cv: string = "";
  public credo: string = "";
  public facebook: string = "https://www.facebook.com/ivan.litskevich";
  public linkedin: string = "https://www.linkedin.com/in/ivanlitskevich";
  public googleplus: string = "https://plus.google.com/104075157979954791192";
  public github: string = "https://github.com/sxkote";
  public pluralsight: string = "https://app.pluralsight.com/profile/ivan-litskevich";
  public microsoftMCSA: string = "data/certificates/ms-mcsa-2016.pdf";
  public microsoftMCSD: string = "data/certificates/ms-mcsd-2016.pdf";

}

export class ExperienceModel {
  public period: string = "";
  public avatarUrl: string = "";
  public organization: string = "";
  public position: string = "";
  public roles: string = "";
  public text: string = "";
}

export class SkillsModel {
  public technical: SkillModel[] = [];
  public soft: SkillModel[] = [];
  public roles: SkillModel[] = [];
  public languages: SkillModel[] = [];
}

export class SkillModel {
  public category: string = "";
  public title: string = "";
  public value: number = 0;
  public label: string = "";
}

export class CertificateModel {
  public label: string = "";
  public url: string = "";
}

export class CourseModel {
  public period: string = "";
  public organization: string = "";
  public title: string = "";
  public avatarUrl: string = "";
  public certificate: CertificateModel | undefined;
  public isVisible: boolean = true;
}

export class InstituteModel extends CourseModel {
  public faculty: string = "";
}

export class CertificationModel extends CourseModel {
  public category: string = "";
  public text: string = "";
}

export class EducationModel {
  public institutes: InstituteModel[] = [];
  public courses: CourseModel[] = [];
}

export class TranslationModel {
  public lang: string = "";
  public titlePrefix: string = "";
  public email: string = "";
  public phone: string = "";
  public call: string = "";
  public skype: string = "";
  public resume: string = "";
  public downloadCV: string = "";
  public getCV: string = "";
  public followme: string = "";

  public headings: TranslateHeadingsModel = new TranslateHeadingsModel();
  public menu: TranslateMenuModel = new TranslateMenuModel();
}

export class TranslateHeadingsModel {
  public skills: string = "";
  public skillsTechnical: string = "";
  public skillsTechnicalNet: string = "";
  public skillsTechnicalWeb: string = "";
  public skillsTechnicalMethodology: string = "";
  public skillsSoft: string = "";
  public skillsSoftStrengths: string = "";
  public skillsSoftRoles: string = "";
  public skillsSoftLanguages: string = "";
  public experience: string = "";
  public education: string = "";
  public educationHigh: string = "";
  public educationCourses: string = "";
  public certification: string = "";
  public contacts: string = "";
}

export class TranslateMenuModel {
  public skills: string = "";
  public experience: string = "";
  public certification: string = "";
  public educationHigh: string = "";
  public educationCourses: string = "";
  public contacts: string = "";
}
