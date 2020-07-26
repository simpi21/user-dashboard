<template>
  <div id="app">
    <h1 class="app-heading">Users Dashboard</h1>
    <Member
      v-for="member in members"
      :key="member.id"
      :id="member.id"
      :realName="member.real_name"
      :tz="member.tz"
      :activityPeriods="member.activity_periods"
    />
  </div>
</template>

<script>
import Member from './components/Member'
import getData from './mockServer';

export default {
  name: 'App',
  components: {
    Member
  },
  data() {
    return {
      members: getData().members
    }
  }
}
</script>

<style>
  * {
    margin: 0;
  }
  #app {
    padding: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
  }

  .app-heading {
    color: #2c9ebb;
  }
</style>
