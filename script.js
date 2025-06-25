// 当整个页面加载完毕后执行
document.addEventListener('DOMContentLoaded', () => {

    // 获取所有需要的元素
    const jobCards = document.querySelectorAll('.job-card');
    const modal = document.getElementById('job-modal');
    const closeModalButton = document.querySelector('.close-button');
    
    // 获取弹窗内部用来显示信息的元素
    const modalTitle = document.getElementById('modal-title');
    const modalLocation = document.getElementById('modal-location');
    const modalDescription = document.getElementById('modal-description');
    const modalRequirements = document.getElementById('modal-requirements');
    const modalSalary = document.getElementById('modal-salary'); // 1. 新增：获取职位待遇的元素

    // 为每一张招聘卡片添加点击事件
    jobCards.forEach(card => {
        card.addEventListener('click', () => {
            // 从被点击卡片的 data-* 属性中获取信息
            const title = card.dataset.title;
            const location = card.dataset.location;
            const description = card.dataset.description;
            const salary = card.dataset.salary || '面议'; // 2. 新增：获取待遇信息，如果不存在则显示“面议”
            
            // 将 \n 替换为 <br> 以在HTML中实现换行
            const requirements = card.dataset.requirements.replace(/\\n/g, '<br>');
            const salaryFormatted = salary.replace(/\\n/g, '<br>'); // 新增：同样处理待遇信息中的换行

            // 将获取到的信息填充到弹窗中
            modalTitle.textContent = title;
            modalLocation.textContent = location;
            modalDescription.textContent = description;
            modalRequirements.innerHTML = requirements;
            modalSalary.innerHTML = salaryFormatted; // 3. 新增：将待遇信息填充到弹窗中

            // 显示弹窗
            modal.style.display = 'block';
        });
    });

    // 定义关闭弹窗的函数
    const closeModal = () => {
        modal.style.display = 'none';
    };

    // 当用户点击关闭按钮 (x) 时，关闭弹窗
    closeModalButton.addEventListener('click', closeModal);

    // 当用户点击弹窗外部的灰色区域时，也关闭弹窗
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
});