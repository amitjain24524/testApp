import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  headerBanner = {
    loop:true,
    margin: 0,
    nav: true,
    animateOut: 'slideOutDown',
    animateIn: 'slideInDown',
    active: true,
    smartSpeed: 5000,
    autoplay: 5000,
    navText: [ '<span class="ficon ft-chevron-left"></span>', '<span class="ficon ft-chevron-right"></span>' ],
    responsiveClass: false,
    responsive: {
      0: {
        items: 1,
        nav: true
       }
      // 600: {
      //   items: 1,
      //   nav: true
      // },
      // 1000: {
      //   items: 2,
      //   nav: true,
      //   loop: false
      // },
      // 1500: {
      //   items: 3,
      //   nav: true,
      //   loop: false
      // }
    }
  }
 
  headerSlider = [
    {
      title: "Excellence in teaching",
      descriptionOne: "Change the world by any work you want",
      descriptionTwo: "to Get Our Globe Beautiful ..JOIN WITH US",
      fillButton: "Take a Tour",
      borderButton: "About Us",
      image: "/testApp/assets/images/banner/banner1.jpg"
    },
    {
      title: "Forward. Thinking.",
      descriptionOne: "Change the world and get reworded",
      descriptionTwo: "to Get Our Globe Beautiful ..JOIN WITH US",
      fillButton: "Take a Tour",
      borderButton: "About Us",
      image: "/testApp/assets/images/banner/banner2.jpg"
    },
    {
      title: "Great students community",
      descriptionOne: "Change the world by any work you want",
      descriptionTwo: "to Get Our Globe Beautiful ..JOIN WITH US",
      fillButton: "Take a Tour",
      borderButton: "About Us",
      image: "/testApp/assets/images/banner/banner3.jpg"
    },
    {
      title: "Get Everything Right",
      descriptionOne: "Change the world by any work you want",
      descriptionTwo: "to Get Our Globe Beautiful ..JOIN WITH US",
      fillButton: "Take a Tour",
      borderButton: "About Us",
      image: "/testApp/assets/images/banner/banner4.jpg"
    }
  ]

  institutionsList = [
    {
      name: "Australia",
      image: "/testApp/assets/images/university.jpg"
    },
    {
      name: "Canada",
      image: "/testApp/assets/images/university.jpg"
    },
    {
      name: "New Zealand",
      image: "/testApp/assets/images/university.jpg"
    },
    {
      name: "USA",
      image: "/testApp/assets/images/university.jpg"
    },
    {
      name: "UK",
      image: "/testApp/assets/images/university.jpg"
    },
    {
      name: "Singapore",
      image: "/testApp/assets/images/university.jpg"
    },
    {
      name: "Ireland",
      image: "/testApp/assets/images/university.jpg"
    },
    {
      name: "Europe",
      image: "/testApp/assets/images/university.jpg"
    },
    {
      name: "Dubai",
      image: "/testApp/assets/images/university.jpg"
    }
  ]

  studentAdmitted = {
    loop:true,
    margin: 25,
    nav: false,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    active: true,
    smartSpeed: 3000,
    autoplay: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1500: {
        items: 4
      }
    }
  }
 
  studentAdmittedList = [
    {
      name: "Cristina rose",
      image: "/testApp/assets/images/student/student01.jpg"
    },
    {
      name: "Jake reilly",
      image: "/testApp/assets/images/student/student02.jpg"
    },
    {
      name: "Mary jane",
      image: "/testApp/assets/images/student/student03.jpg"
    },
    {
      name: "mark bagley",
      image: "/testApp/assets/images/student/student04.jpg"
    },
    {
      name: "Cristina Rose",
      image: "/testApp/assets/images/student/student01.jpg"
    },
    {
      name: "Jake Reilly",
      image: "/testApp/assets/images/student/student02.jpg"
    },
    {
      name: "mary jane",
      image: "/testApp/assets/images/student/student03.jpg"
    },
    {
      name: "mark bagley",
      image: "/testApp/assets/images/student/student04.jpg"
    }
  ]

  StudentTestimonials = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: false,
    dots:false,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  }
 
  StudentTestimonialsList = [
    {
      name: "Dalveer Singh",
      testimonial: "Hello , I’m Dalveer Singh from Indore. I did my IELTS and got my Canada visa within 6 days from MyIEC Indore. The guidance and support from Jagjeet sir and Navneet sir was never ending . All my queries and doubts are cleared . I recommend all of you who are looking for a positive response should immediately apply and feel the difference. Visa for Canada",
      image: "/testApp/assets/images/user01.jpg"
    },
    {
      name: "Harbaksh Singh",
      testimonial: "I visited every institute which is in my city and every one said me your profile is too week so after that i eared about MyIEC they give me right guidance for choose better university in Australia.Now, I have Australia visa without IELTS, I have got my Australia VIsa approved in only 4 days with #MYIEC Thanks, #MYIECTeam Indore. Specially Jagjeet sir whose counseling and appropriate guidance lead to my visa success. ( I Personally recommended all the student who are looking for study abroad guidance then visit MYIEC Indore, One of the best overseas consultancy in Indore ) Thanks a lot !!",
      image: "/testApp/assets/images/user02.jpg"
    },
    {
      name: "Harshit Sahu",
      testimonial: "This is the best place to process your visa file. Services provided by this consultancy was very impressive. And whenever I got doubt about my file process I asked them. And they replied me back very quickly even they were not in their working hours. So overall everything is good about this consultancy. Finally, I got my visa only in 15 days",
      image: "/testApp/assets/images/user03.jpg"
    }
  ]

  photoOptions = {
    margin: 25,
    loop:true,
    smartSpeed: 3000,
    autoplay: 3000,
    nav: true,
    autoHeight: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }
 
  photosList = [
    {
      text: "Everfresh Flowers",
      image: "/testApp/assets/images/photos/myIEC01.jpg"
    },
    {
      text: "Festive Deer",
      image: "/testApp/assets/images/photos/myIEC02.jpg"
    },
    {
      text: "Morning Greens",
      image: "/testApp/assets/images/photos/myIEC03.jpg"
    },
    {
      text: "Bunch of Love",
      image: "/testApp/assets/images/photos/myIEC04.jpg"
    },
    {
      text: "Blue Clear",
      image: "/testApp/assets/images/photos/myIEC05.jpg"
    },
    {
      text: "Evening Clouds",
      image: "/testApp/assets/images/photos/myIEC06.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC07.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC08.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC09.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC10.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC11.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC12.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC13.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC14.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC15.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC16.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC17.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC18.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC19.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC20.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC21.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC22.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "/testApp/assets/images/photos/myIEC23.jpg"
    },

  ]

  ngOnInit() {
  }

}
