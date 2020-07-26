<template>
  <div class="member-container">
    <button @click="handleUserClick()" class="user-button">{{realName}}</button>
    <Modal v-show="isModalVisible" :onClose="handleUserClick">
      <p id="user-name">Name: {{realName}}</p>
      <p id="tz-para">tz: {{tz}}</p>

      <div id="activity-period-container">
        <p id="activity-period-heading">Activity period</p>
        <Calendar is-expanded :attributes="attributes" @dayclick="handleCalendarClick($event)"/>
      </div>
    </Modal>
  </div>
</template>

<script>
import Calendar from 'v-calendar/lib/components/calendar.umd'
import Modal from "./Modal.vue";
import toValidDate from '../toValidDate';

export default {
  name: "Member",
  props: {
    id: String,
    realName: String,
    tz: String,
    activityPeriods: Array,
  },
  data() {
    return {
      isModalVisible: false,
      attributes: this.activityPeriods.map((period) => ({
        key: period.start_time + period.end_time,
        highlight: true,
        dates: {
          start: toValidDate(period.start_time),
          end: toValidDate(period.end_time),
        },
        popover: {
          label: `${period.start_time} - ${period.end_time}`
        }
      }))
    };
  },
  methods: {
    handleUserClick() {
      this.isModalVisible = !this.isModalVisible;
    },
  },
  components: {
    Modal,
    Calendar
  },
};
</script>


<style scoped>

.member-container {
  position: relative;
}
.user-button {
  padding: 5px;
  display: block;
  background-color: white;
  cursor: pointer;
  border: none;
  width: 100%;
  font-size: 22px;
  margin-top: 10px;
  outline: none;
}
.user-button:hover {
  color: yellowgreen;
}
p {
  font-size: 18px;
}

#user-name {
  color: #2c9ebb;
  font-weight: 800;
}

#tz-para {
  font-style: italic;
  color: silver;
}

#activity-period-container {
  padding: 30px;
}

#activity-period-heading {
  font-weight: 600;
  font-size: 14px;
}

.activity-list {
  list-style: none;
  font-size: 14px;
  color: grey;
  margin-bottom: 10px;
}

</style>
