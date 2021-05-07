<template >
    <div>
        <FullCalendar :options="calendarOptions" />
    </div>
</template>
<script>

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import TimeGridPlugin from '@fullcalendar/timegrid'
import ListPlugin from '@fullcalendar/list'

export default {
    components: {
        FullCalendar
    },
    data() {
         return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin, TimeGridPlugin, ListPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
            events: [
              { title: 'event 1', date: '2019-04-01' },
              { title: 'event 2', date: '2019-04-02' }
            ]
      }
        }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      },
      handleDateClick: function(arg) {
        alert('date click! ' + arg.dateStr)
      }  
    }
}
</script>
<style >
    
</style>