export default {
  data() {
    return {
      uploaded: false,
    };
  },
  template: '#upload-box',
  methods: {
    read(file, callback = () => {}) {
      let reader = null;

      if (file) {
        if (/^image\/\w+$/.test(file.type)) {
          reader = new global.FileReader();

          reader.onload = () => {
            this.uploaded = true;
            this.$dispatch('broadcast', 'uploaded', {
              type: file.type,
              name: file.name,
              url: reader.result,
            });

            callback();
          };

          reader.readAsDataURL(file);
        } else {
          global.alert('Please choose an image file.');
          callback();
        }
      } else {
        callback();
      }
    },
    change(e) {
      const target = e.target;
      const files = target.files;

      this.read(files && files[0], () => {
        target.value = '';
      });
    },
    dragover(e) {
      e.preventDefault();
    },
    drop(e) {
      const files = e.dataTransfer.files;

      e.preventDefault();

      this.read(files && files[0]);
    },
  },
  events: {
    remove() {
      this.uploaded = false;
    },
    removed() {
      this.uploaded = false;
    },
  },
};
