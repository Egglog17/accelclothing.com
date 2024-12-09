// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("ACCEL.html", "ACCEL", "ACCEL X BBOL  ELEVATE YOUR GAME  LIMITED EDITION COLLAB  ACCEL X BBOL  Hurry Up, Expires Soon!  ONCE IN A LIFETIME COLLAB  High Class Affordable Clothes   Latest products  Best Selection  CUSTOMER SERVICES  SOCIAL MEDIA  COMPANY  High Class Affordable Clothes  Do you want to add this in your cart?   HOOPS MEET HIGH-FASHION  Sign up for our news letter to receive exclusive offers It’s easy and free!  UP TO 50% OFF  ELEVATE YOUR STYLE  If you're looking for a great, affordable, and comfortable clothes, here at Accel we've got what you're looking for From Men, Women, to Kids sizes we made sure that all of our products will satisfy your likeliness We not only sell clothes but also many types of accesories We make you that you're not dissapointed when you buy our product because we make sure that it is make you order worth it Now tell some of your friends that they must try to what Accel offers  Copyright © 2023 WYSIWYG Web Builder     ", "");
   this[database_length++] = new SearchPage("ACCEL-X-BBOL.html", "ACCEL-X-BBOL", "P2000.00  ACCEL X BBOL WARMER  OTHER ACCEL X BBOL PRODUCTS   THIS ACCEL X BBOL WARMER HOODIE IS A LIMITED EDITION HOODIE THAT MADE FOR THE BASKETBALL COURT OR FOR THE SATISFACTION OF YOUR COMFORT  THIS COLLAB IS BY THE CREATION OF TWO FRIENDS THAT THOUGHT OUT \"WHAT IF A DESIGNER BRAND AND BASKETBALL HAD A PRODUCT\" THAT'S WHY ACCEL X BBOL CREATED TO SHARE TO YOU THE MAJESTIC BEAUTY OF FASHION AND BASKETBALL GIVES TO US   DESCRIPTION  Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer nec odio Praesent libero Sed cursus ante dapibus diam Sed nisi Nulla quis sem at nibh elementum imperdiet Duis sagittis ipsum Praesent mauris Fusce nec tellus sed augue semper porta    CUSTOMER SERVICES  SOCIAL MEDIA  COMPANY  Copyright © 2023 WYSIWYG Web Builder     ", "");
   this[database_length++] = new SearchPage("Projects.html", "PROJECTS", "  Vlogs and Campaigns  CUSTOMER SERVICES  SOCIAL MEDIA  COMPANY  Do you want to add this in your cart?   Sign up for our news letter to receive exclusive offers It’s easy and free!  Copyright © 2023 WYSIWYG Web Builder     ", "");
   return this;
}
