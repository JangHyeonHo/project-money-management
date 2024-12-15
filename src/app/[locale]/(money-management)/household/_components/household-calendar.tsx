import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { HouseholdCalendarProps } from '../_types/household-type';
import interactionPlugin from "@fullcalendar/interaction";

export default function HouseholdCalendar({className, events, dateClilck, locale}:HouseholdCalendarProps) {

    // const events = [
    //     { title: 'Meeting', start: new Date() }
    // ]

    return (
        <div className={className}>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                selectable={true}
                selectMirror={false}
                unselectAuto={false}
                locale={locale}
                dateClick={(date)=>{
                    if(dateClilck){
                        dateClilck(date.date);
                    }
                }}
                displayEventTime={false}
                weekends={true}
                events={events}
            />
        </div>
    );
}