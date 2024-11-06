"use strict";

const STORAGE_KEY = "hyp3t1";

Vue.createApp({
    data() {
        return {
            notesData: [],
            contents: "",
            currentTheme: "blue-theme",
        };
    },
    methods: {
        saveData() {
            if (this.contents.trim().length === 0) return;

            const entry = {
                date: new Date().toLocaleString(),
                contents: this.contents,
            };

            this.notesData.push(entry);
            this.contents = "";

            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.notesData));
        },

        removeEntry(index) {
            this.notesData.splice(index, 1);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.notesData));
        },

        clearData() {
            this.notesData = [];
            localStorage.removeItem(STORAGE_KEY);
        },

        loadData() {
            const data = localStorage.getItem(STORAGE_KEY);
            if (data) {
                this.notesData = JSON.parse(data);
            }
        },

        toggleTheme() {

            this.currentTheme = this.currentTheme === "blue-theme" ? "red-theme" : "blue-theme";
        }
    },

    created() {
        this.loadData();
    },
}).mount('#app');
