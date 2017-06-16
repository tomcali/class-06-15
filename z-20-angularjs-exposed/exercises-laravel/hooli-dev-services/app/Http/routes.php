<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
use Illuminate\Support\Facades\Input;
//use Log;

Route::get('/', function () {
 return view('index', ['title' => 'Hooli Development Services', 'page_heading' => 'Welcome to Hooli']);
});


Route::get('/about-us', function () {
 return view('about', ['title' => 'About Us | Hooli', 'page_heading' => 'About Hooli Development Services']);
});


Route::get('/our-services', function () {
 return view('services', ['title' => '', 'page_heading' => '']);
});

Route::get('/contact-us', function () {
 return view('contact', ['title' => 'Contact Us | Hooli', 'page_heading' => 'Contact Us']);
});

Route::post('/contact-us-process', function () {

  $checks = implode(Input::get('checkbox'),",");

  Log::info('This is some useful information. '.$checks);
  Log::info(env('MAIL_USERNAME',"").env('MAIL_NAME',""));

  DB::table('contact_submissions')->insert(
      ['name' => Input::get('name'), 'email' => Input::get('email'), 'services' => $checks, 'message' => Input::get('message')]
  );



  Mail::send('emails.emailInquiry', ["theMessage"=>Input::get('message'),"checks"=>$checks], function($message){
    $message->to(env('MAIL_USERNAME',""), env('MAIL_NAME',""))->subject('Hooli Development Contact From '.Input::get('name'));
    $message->from(Input::get('email'), Input::get('name'));
  });

 return view('thank-you', ['title' => "Thank You", 'page_heading' => "Thank you for contacting us.", 'theMessage' => Input::get('message')]);

});
