import { index, about, food, lineup, credits } from "./pageCheck.js";

window.addEventListener("load", function() {
  this.console.log("navbar loaded");
  document.getElementById("UNB").innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="ml-5 navbar-brand" href="#">2020 대동제</a>
            <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link ${index}" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link ${about}" href="/about">축제 소개</a>
                </li>
                <li class="nav-item ${lineup}">
                <a class="nav-link" href="/lineup">라인업</a>
                </li>
                <li class="nav-item">
                <a class="nav-link ${food}" href="/food">음식 추천</a>
                </li>
                <li class="nav-item">
                <a class="nav-link ${credits}" href="/credits">Credits</a>
                </li>
            </ul>
            </div>
        </nav>
        `;
});
