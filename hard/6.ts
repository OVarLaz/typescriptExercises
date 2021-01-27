declare function SimpleVue<T,U,V>(options: {
    data: T,
    computed: U ,
    methods: V & ThisType<U>,
  } ): T | U | V
  
  const instance = SimpleVue({
    data() {
      return {
        firstname: 'Type',
        lastname: 'Challenges',
        amount: 10,
      }
    },
    computed: {
      fullname() {
        return this.firstname + ' ' + this.lastname
      }
    },
    methods: {
      hi() {
        alert(this.fullname.toLowerCase())
      }
    }
  })