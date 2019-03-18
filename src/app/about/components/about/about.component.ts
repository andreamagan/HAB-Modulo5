import { Component } from "@angular/core";

@Component({
  selector: "sn-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent {
  title = "Hey there 👋";
  presentation = "My name is Andrea";
  description =
    "I'm a frontend developer and love to create beautiful websites!! You can check more about me in the followings sites:";

  links = [
    {
      URL: "https://google.com",
      name: "LinkedIn"
    },
    {
      URL: "https://google.com",
      name: "Github"
    },
    {
      URL: "https://google.com",
      name: "Portfolio"
    },
    {
      URL: "https://google.com",
      name: "Twitter"
    }
  ];
  contact = {
    description: "If you want to contact with me you can send me an email to:",
    email: "andrea.magan@outlook.com"
  };
}
