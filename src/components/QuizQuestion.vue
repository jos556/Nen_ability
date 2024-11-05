<template>
  <div class="quiz-question">
    <div class="progress-bar">
      <div class="progress" :style="{ width: `${progress}%` }"></div>
      <span class="progress-text">{{ currentQuestion }}/{{ totalQuestions }}</span>
    </div>

    <div class="question-container">
      <img v-if="question.image" :src="question.image" :alt="question.text" class="question-image" style="border-radius: 10px;width: 250px;">
      <h2 class="question-text">{{ question.text }}</h2>
      
      <div class="options-container">
        <button 
          v-for="(option, index) in question.options" 
          :key="index"
          class="option-button"
          @click="selectOption(option)"
          :class="{ 'selected': selectedOption === option }"
        >
          <img v-if="option.image" :src="option.image" :alt="option.text" class="option-image">
          <span class="option-text">{{ option.text }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  currentQuestion: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['answer']);

const selectedOption = ref(null);

const progress = computed(() => {
  return (props.currentQuestion / props.totalQuestions) * 100;
});

const selectOption = (option) => {
  selectedOption.value = option;
  emit('answer', option);
};
</script>

<style lang="scss" scoped>
.quiz-question {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  .progress-bar {
    width: 100%;
    height: 20px;
    background: #eee;
    border-radius: 10px;
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;

    .progress {
      height: 100%;
      background: #4CAF50;
      transition: width 0.3s ease;
    }

    .progress-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #333;
      font-weight: bold;
    }
  }

  .question-container {
    text-align: center;
    
    .question-image {
      max-width: 100%;
      height: auto;
      margin-bottom: 20px;
      border-radius: 10px;
    }

    .question-text {
      font-size: 24px;
      margin-bottom: 30px;
      color: #333;
    }
  }

  .options-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;

    .option-button {
      background: white;
      border: 2px solid #ddd;
      border-radius: 10px;
      padding: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }

      &.selected {
        border-color: #4CAF50;
        background: #e8f5e9;
      }

      .option-image {
        width: 100%;
        max-width: 200px;
        height: auto;
        margin-bottom: 15px;
        border-radius: 8px;
      }

      .option-text {
        font-size: 22px;
        font-weight: 700;
        color: #333;
        line-height: 1.4;
        text-align: center;
        padding: 0 10px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 15px;

    .question-container {
      .question-text {
        font-size: 20px;
        padding: 0 10px;
      }

      .question-image {
        width: 200px;
      }
    }

    .options-container {
      grid-template-columns: 1fr;
      gap: 15px;

      .option-button {
        padding: 15px;

        .option-text {
          font-size: 20px;
        }

        .option-image {
          max-width: 180px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .progress-bar {
      height: 15px;
      margin-bottom: 20px;
    }

    .question-container {
      .question-text {
        font-size: 18px;
      }

      .question-image {
        width: 150px;
      }
    }

    .options-container {
      .option-button {
        .option-text {
          font-size: 18px;
        }

        .option-image {
          max-width: 150px;
        }
      }
    }
  }
}
</style> 