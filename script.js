@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

button:hover {
  animation: bounce 0.5s ease-in-out;
}
