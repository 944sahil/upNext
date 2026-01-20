import { Routes } from '@angular/router';
import { App } from './app';
import { Home } from './home/home';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { BookTickets } from './book-tickets/book-tickets';
import { AddEvent } from './add-event/add-event';
import { UpdateEvent } from './update-event/update-event';
import { About } from './about/about';
import { EventDetails } from './event-details/event-details';
import { PastBookings } from './past-bookings/past-bookings';
import { UpcomingBookings } from './upcoming-bookings/upcoming-bookings';

export const routes: Routes = [
    // {path: "", pathMatch:"full", component: App},
    {path: "", component: App},
    {path: "login", component: Login},
    {path: "profile", component: Profile},
    {path: "book-tickets", component: BookTickets},
    {path: "add-event", component: AddEvent},
    {path: "update-event", component: UpdateEvent},
    {path: "about", component: About},
    {path: "home", component: Home},
    {path: "details", component: EventDetails},
    {path: "pastBookings", component: PastBookings},
    {path: "upcomingBookings", component: UpcomingBookings},
];
