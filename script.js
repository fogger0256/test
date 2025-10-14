document.addEventListener('DOMContentLoaded', function() {
    // カウントダウンの日付は2025/11/17
    const targetDate = new Date('2025-11-17T00:00:00');
    const daysElement = document.getElementById('days');

    function updateCountdown() {
        const now = new Date();
        // ターゲットの日付と現在の時刻との差をミリ秒で計算
        const difference = targetDate - now;

        // 差が0以下（日付を過ぎた場合）
        if (difference < 0) {
            daysElement.textContent = '0';
            // カウントダウン終了後に更新を停止
            clearInterval(countdownInterval);
            return;
        }

        // ミリ秒を日数に変換
        // 1日 = 24時間 * 60分 * 60秒 * 1000ミリ秒
        const msInDay = 1000 * 60 * 60 * 24;

        // 日数を計算（端数切り捨てで「あと何日」とする）
        const days = Math.floor(difference / msInDay);

        // 表示を更新
        daysElement.textContent = days;
    }

    // 初回実行
    updateCountdown();

    // 1秒ごとに更新（日付の切り替わりで問題ないが、念のため1秒ごと）
    // 日付の変わり目での正確な計算のため、実際は1日ごと（msInDay）に更新するのがより効率的です。
    // 今回はデモとして1秒（1000ms）ごとに設定します。
    const countdownInterval = setInterval(updateCountdown, 1000);
});
