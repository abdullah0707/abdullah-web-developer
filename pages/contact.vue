<template>
  <div class="custom-section h-screen overflow-scroll absolute z-10 left-0 right-0">
    <h1 class="text-center font-semibold text-white text-6xl py-10">
      Contact Me
    </h1>
    <hr width="50px" class="border-4 mx-auto rounded-full border-amber-400 mb-10">
    <p class="text-center font-semibold text-white md:text-lg text-sm py-3 mx-auto w-full md:w-3/6">
      Whether you're ready to transform your digital presence or need guidance along the way, we're here to help. Reach
      out to our friendly team of experts, and let's unlock new possibilities together.
    </p>
    <div class=" flex flex-col h-100 justify-center px-6 lg:px-8 ">
      <div class=" lg:mt-10 mt-2 sm:mx-auto sm:w-full sm:max-w-sm pb-10">

        <form class="space-y-10 text-sm mx-2" action="#" method="POST" @submit.prevent="SubmitForm(form)">
          <div class="flex w-full">
            <i for="name" class="fa-regular fa-user fa-xl border-b-2 pt-5 pe-2 text-yellow-400  border-yellow-400"></i>
            <div class="user-box w-full">
              <input type="name" name="name" id="name" v-model="form.name" required
                class="mt-1 px-3 py-2   border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full  sm:text-sm focus:ring-5" />
              <label for="name" class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold ">
                  Name
                </span>
              </label>
            </div>
          </div>
          <div class="flex w-full">
            <i class="fa-regular fa-envelope fa-xl border-b-2 pt-5 pe-2 text-yellow-400  border-yellow-400"></i>
            <div class="user-box w-full">
              <input type="email" name="email" id="email" v-model="form.email" required
                class="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full  sm:text-sm focus:ring-5" />
              <label for="email">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold ">
                  Email
                </span>
              </label>
            </div>
          </div>
          <div class="flex w-full">
            <i class="fa-solid fa-mobile-screen fa-xl border-b-2 pt-5 pe-2 text-yellow-400  border-yellow-400"></i>
            <div class="user-box w-full">
              <input type="number" name="phone" id="phone" autocomplete="phone" v-model="form.phone" required
                class="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full  sm:text-sm focus:ring-5">
              <label for="phone" class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold ">
                  Phone number
                </span>
              </label>
            </div>
          </div>
          <div class="flex w-full ">
            <i class="fa-regular fa-pen-to-square fa-xl border-b-2 pt-5 pe-2 text-yellow-400  border-yellow-400"></i>
            <div class="user-box w-full ">
              <input type="text" name="subject" id="subject" v-model="form.subject" required
                class="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full  sm:text-sm focus:ring-5" />
              <label for="subject" class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold ">
                  Subject
                </span>
              </label>
            </div>
          </div>
          <div class="flex w-full">
            <i class="fa-regular fa-message fa-xl border-b-2 pt-6 pe-2 text-yellow-400  border-yellow-400"></i>
            <div class="user-box w-full">
              <textarea id="message" name="message" v-model="form.message" type="textarea" required
                class="mt-1 p-3 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full  sm:text-sm focus:ring-5" />
              <label for="message" class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold  ">
                  Message
                </span>
              </label>
            </div>
          </div>

          <div>
            <button type="submit"
              class="flex w-full justify-center btn p-4 relative border-b-2 uppercase text-amber-300 shadow bg-transparent hover:delay-[.5s] transition-all duration-500 hover:text-black before:absolute before:left-0 before:bottom-0 before:h-[3px] before:w-0 before:transition-all before:duration-500 before:bg-amber-300 before:hover:w-full after:absolute after:left-0 after:bottom-0 after:h-0 after:w-full after:transition-all after:duration-500 after:bg-amber-300 after:hover:h-full after:text-black after:-z-10 after:hover:delay-[0.4s] font-bold items-center">
              <i class="fa-regular fa-paper-plane fa-xl px-2 heartbeat"></i>
              <template v-if="waiting">
                <i class="fa-solid fa-spinner fa-spin-pulse p-1"></i>
                Loading...
              </template>
              <span v-if="!waiting" class="heartbeatf">
                Sand Message
              </span>
            </button>
          </div>
        </form>
      </div>
      <div class="my-3 mx-auto w-3/4 md:w-1/4 z-10 absolute bottom-0 md:bottom-5 right-4">
        <UNotification v-if="succsess" icon="i-heroicons-check-circle" color="primary" :id="3"
          title="Your message was sent successfully!"
          description="Thank you for sending. Your message has been received. I will contact you as soon as possible."
          :close-button="null" :callback="onCallback()" :timeout="timer" />
      </div>
      <div class="my-3 mx-auto w-3/4 md:w-1/4 z-10 absolute bottom-0 md:bottom-5 right-4">
        <UNotification v-if="errors" icon="i-heroicons-x-circle" color="red" :id="6" title="Your message was not sent!"
          description="I am sorry that your message did not reach me. Please try sending it again." :timeout="timer"
          :callback="onCallback()" :close-button="null" />
      </div>
    </div>
  </div>
</template>

<script setup>

const waiting = ref(false);
const errors = ref(false);
const succsess = ref(false);
const timer = ref(3000);

useHead({
  titleTemplate: "%s Contact us",
})
definePageMeta({
  layout: "app",
});
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
});
function onCallback() {
  setTimeout(() => {
    succsess.value = false;
    errors.value = false;
  }, timer.value);
}
async function SubmitForm(form) {
  waiting.value = true;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "abdullahelgammal25@gmail.com",
    Password: "B029B2FF0363704FC6D2DB25949CE702253F",
    To: 'abdullahelgammal25@gmail.com',
    From: 'abdullahelgammal25@gmail.com',
    Subject: form.subject,
    Body: form
  }).then(
    succsess.value = true,
    waiting.value = false,
    form.name = '',
    form.email = '',
    form.phone = '',
    form.subject = '',
    form.message = '',
  ).catch(error => {
    console.log(error),
      errors.value = true;
  })
}
</script>

<style></style>