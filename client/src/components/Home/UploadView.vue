<template>
    <div class="container">
        <div
            class="dropzone"
            @dragover.prevent
            @dragenter.prevent
            @dragstart.prevent
            @drop.prevent="handleFileChange($event.dataTransfer)"
        >
        <input
            id="file-input"
            type="file"
            accept="image/png, image/jpeg"
            @change="handleFileChange($event.target)"
            required
            />
            <h2 for="file-input">Click or Drag N Drop Image</h2>
            <img v-bind:src="preview" />
            <h3 v-if="preview">File name: {{ fileName }}</h3>
        </div>

        <button type="submit" @click="upload">Upload</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fileName: "",
                preview: null,
                preset: process.env.VUE_APP_UPLOAD_PRESET,
                formData: null,
                cloudName: process.env.VUE_APP_CLOUD_NAME,
                success: "",
            };
        },
        methods: {
            handleFileChange: function (event) {
                this.file = event.files[0];
                this.fileName = this.file.name;

                this.formData = new FormData();
                this.formData.append("upload_preset", this.preset);

                let reader = new FileReader();
                reader.readAsDataURL(this.file);

                reader.onload = (e) => {
                    this.preview = e.target.result;
                    this.formData.append("file", this.preview);
                };
            },
        },
    }
</script>

<style scoped>
.dropzone {
    height: fit-content;
    min-height: 200px;
    max-height: 400px;
    width: 600px;
    background: #fdfdfd;
    border-radius: 5px;
    border: 2px dashed #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  input[type="file"] {
    position: absolute;
    opacity: 0;
    width: inherit;
    min-height: 200px;
    max-height: 400px;
    cursor: pointer;
  }
  
  img {
    width: 50%;
    height: 50%;
  }
  button {
    background-color: transparent;
    border: 2px solid #e74c3c;
    border-radius: 1em;
    color: #e74c3c;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    margin: 20px;
    padding: 1.2em 2.4em;
    text-align: center;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
  }
</style>