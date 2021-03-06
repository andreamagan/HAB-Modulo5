import { Component } from "@angular/core";
import {
  faSearch,
  faComments,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "sn-welcome-hero",
  templateUrl: "./welcome-hero.component.html",
  styleUrls: ["./welcome-hero.component.scss"]
})
export class WelcomeHeroComponent {
  rows = [
    {
      id: 1,
      icon: faSearch,
      message: "Find people like you"
    },
    {
      id: 2,
      icon: faUsers,
      message: "Build you friends network"
    },
    {
      id: 3,
      icon: faComments,
      message: "Keep in touch"
    }
  ];
}
