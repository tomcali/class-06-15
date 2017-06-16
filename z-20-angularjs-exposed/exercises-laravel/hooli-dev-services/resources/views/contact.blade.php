@extends('layouts.master')

        @section('content')
        <div class="row">
           <div class="col-md-6 col-sm-6 col-xs-12">
            <form method="post" action="/contact-us-process">
              <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
             <div class="form-group ">
              <label class="control-label " for="name">
               Your Name
              </label>
              <input class="form-control" id="name" name="name" type="text"/>
             </div>
             <div class="form-group ">
              <label class="control-label requiredField" for="email">
               Your Email
               <span class="asteriskField">
                *
               </span>
              </label>
              <input class="form-control" id="email" name="email" type="text"/>
             </div>
             <div class="form-group ">
              <label class="control-label requiredField">
               Which of our services are you interested in?
               <span class="asteriskField">
                *
               </span>
              </label>
              <div class=" ">
               <div class="checkbox">
                <label class="checkbox">
                 <input name="checkbox[]" type="checkbox" value="Node.js"/>
                 Node.js
                </label>
               </div>
               <div class="checkbox">
                <label class="checkbox">
                 <input name="checkbox[]" type="checkbox" value="HTML"/>
                 HTML
                </label>
               </div>
               <div class="checkbox">
                <label class="checkbox">
                 <input name="checkbox[]" type="checkbox" value="CSS"/>
                 CSS
                </label>
               </div>
               <div class="checkbox">
                <label class="checkbox">
                 <input name="checkbox[]" type="checkbox" value="JavaScript"/>
                 JavaScript
                </label>
               </div>
               <div class="checkbox">
                <label class="checkbox">
                 <input name="checkbox[]" type="checkbox" value="MySQL"/>
                 MySQL
                </label>
               </div>
               <div class="checkbox">
                <label class="checkbox">
                 <input name="checkbox[]" type="checkbox" value="Middle-Out"/>
                 Middle-Out
                </label>
               </div>
              </div>
             </div>
             <div class="form-group ">
              <label class="control-label " for="message">
               Message
              </label>
              <textarea class="form-control" cols="40" id="message" name="message" rows="5"></textarea>
             </div>
             <div class="form-group">
              <div>
               <button class="btn btn-primary " name="submit" type="submit">
                Contact Us
               </button>
              </div>
             </div>
            </form>
           </div>
          </div>
        @endsection
