<template>
  <div class="home">
    <div class="quiz-card">
      <div class="quiz-image">
        <img src="/images/hunter-nen.png" alt="獵人念能力測驗" class="banner-image">
      </div>
      <div class="quiz-content">
        <h1>獵人念能力測驗</h1>
        <p class="description">你最適合使用哪種念能力？透過這個測驗來發現最適合你的獵人念能力類型！</p>
        
        <div class="quiz-info">
          <div class="info-item">
            <i class="fas fa-clock"></i>
            <span>測驗時間：約3分鐘</span>
          </div>
          <div class="info-item">
            <i class="fas fa-users"></i>
            <span>已有 12,345 人測驗</span>
          </div>
        </div>

        <div class="nen-types">
          <h2>六大念能力</h2>
          <div class="type-grid">
            <div class="type-row">
              <div class="type-item">
                <img src="/images/icons/fire.png" alt="強化系" class="type-icon">
                <span class="type-name">強化系</span>
                <span class="type-desc">增強自身能力</span>
              </div>
              <div class="type-item">
                <img src="/images/icons/gun.png" alt="放出系" class="type-icon">
                <span class="type-name">放出系</span>
                <span class="type-desc">遠距離攻擊</span>
              </div>
              <div class="type-item">
                <img src="/images/icons/slime.png" alt="變化系" class="type-icon">
                <span class="type-name">變化系</span>
                <span class="type-desc">改變物質性質</span>
              </div>
            </div>
            <div class="type-row">
              <div class="type-item">
                <img src="/images/icons/weakness.png" alt="具現化系" class="type-icon">
                <span class="type-name">具現化系</span>
                <span class="type-desc">實體化念能力</span>
              </div>
              <div class="type-item">
                <img src="/images/icons/devil.png" alt="操作系" class="type-icon">
                <span class="type-name">操作系</span>
                <span class="type-desc">控制物體生物</span>
              </div>
              <div class="type-item">
                <img src="/images/icons/term.png" alt="特質系" class="type-icon">
                <span class="type-name">特質系</span>
                <span class="type-desc">獨特能力者</span>
              </div>
            </div>
          </div>
        </div>

        <router-link to="/quiz" class="start-btn">開始測驗</router-link>

        <div class="share-section">
          <p>分享測驗：</p>
          <div class="share-buttons">
            <button class="share-btn facebook" @click="shareToFacebook">
              <img src="/images/facebook.png" style="width: 20px; height: 20px;" alt="Facebook" class="share-icon">
            </button>
            <button class="share-btn line" @click="shareToLine">
              <img src="/images/line.png" style="width: 20px; height: 20px;" alt="Line" class="share-icon">
            </button>
            <button class="share-btn instagram" @click="shareToInstagram">
              <img src="/images/social.png" style="width: 20px; height: 20px;" alt="Instagram" class="share-icon">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const shareUrl = window.location.href;
const shareTitle = '獵人念能力測驗';
const shareDescription = '來測測看你最適合哪種念能力！';

const shareToFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareDescription)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

const shareToLine = () => {
  const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle + '\n' + shareDescription)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

const shareToInstagram = () => {
  // Instagram 不支持直接分享連結，我們可以複製連結到剪貼板
  navigator.clipboard.writeText(shareUrl).then(() => {
    alert('連結已複製！請貼上到 Instagram 分享。');
  }).catch(err => {
    console.error('複製失敗:', err);
    alert('請手動複製網址分享到 Instagram');
  });
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.quiz-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.quiz-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
  
  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.quiz-content {
  padding: 30px;
  
  @media (max-width: 768px) {
    padding: 20px;
    
    h1 {
      font-size: 2.2em;
    }

    .description {
      font-size: 1.2em;
      padding: 0 10px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.8em;
    }
  }

  h1 {
    font-size: 3em;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  .description {
    font-size: 1.4em;
    font-weight: 500;
    color: #666;
    line-height: 1.6;
    margin-bottom: 30px;
  }
}

.quiz-info {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #666;
    
    i {
      color: #42b983;
    }
  }
}

.nen-types {
  margin: 30px 0;
  
  h2 {
    color: #2c3e50;
    margin-bottom: 20px;
  }

  .type-grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    @media (max-width: 768px) {
      .type-row {
        flex-direction: column;
        
        .type-item {
          margin-bottom: 10px;
        }
      }
    }
    
    .type-row {
      display: flex;
      gap: 15px;
      justify-content: center;
      
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
    
    .type-item {
      flex: 1;
      background: #f8f9fa;
      padding: 20px 15px;
      border-radius: 8px;
      text-align: center;
      transition: all 0.3s ease;
      
      .type-icon {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
        object-fit: contain;
      }
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        background: #fff;
        
        .type-icon {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
      }
      
      .type-name {
        display: block;
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 5px;
        font-size: 1.1em;
      }
      
      .type-desc {
        font-size: 0.9em;
        color: #666;
      }
    }
  }
}

.start-btn {
  display: inline-block;
  padding: 20px 50px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-size: 1.5em;
  font-weight: 700;
  margin: 30px 0;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 15px 40px;
    font-size: 1.3em;
  }

  @media (max-width: 480px) {
    padding: 12px 30px;
    font-size: 1.2em;
    width: 90%;
  }
  
  &:hover {
    background-color: #3aa876;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(66, 185, 131, 0.3);
  }
}

.share-section {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  
  p {
    color: #666;
    margin-bottom: 15px;
  }

  .share-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    
    .share-btn {
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &.facebook {
        background-color: #1877f2;
        color: white;
      }
      
      &.line {
        background-color: #00b900;
        color: white;
      }
      
      &.instagram {
        background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
        color: white;
      }
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        
        &.instagram {
          background: linear-gradient(45deg, #833ab4, #fd1d1d, #e1306c);
        }
      }

      i {
        font-size: 1.2em;
      }
    }
  }
}

@media (max-width: 768px) {
  .quiz-content {
    padding: 20px;
    
    h1 {
      font-size: 2em;
    }
  }

  .nen-types .type-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 