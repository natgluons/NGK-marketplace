<template>
    <div class="contact-us">
        <h1>Contact Us</h1>
        
        <div class="social-media-section">
            <div class="section-header">
                <div class="line"></div>
                <h3>Find us on</h3>
                <div class="line"></div>
            </div>
            <div class="social-links">
                <h4>
                    <a href="https://www.instagram.com/natashagadingdoghome/" target="_blank" style="display: flex; align-items: center;">
                        <img src="@/assets/instagram.svg" alt="Instagram" style="margin-right: 8px;" /> 
                        @natashagadingdoghome
                    </a>
                </h4>
                <h4>
                    <a href="https://www.youtube.com/channel/UCrh3Rw3buz-5cun_Y-zqtEg/search?app=desktop" target="_blank" style="display: flex; align-items: center;">
                        <img src="@/assets/youtube.svg" alt="YouTube" style="margin-right: 8px;" />
                        @NatashaGadingKennel
                    </a>
                </h4>
                <h4>
                    <a href="https://www.tiktok.com/@natasha_gading_kennel" target="_blank" style="display: flex; align-items: center;">
                        <img src="@/assets/tiktok.svg" alt="TikTok" style="margin-right: 8px;" />
                        @natasha_gading_kennel
                    </a>
                </h4>
                <h4>
                    <a href="https://x.com/NatashaGading" target="_blank" style="display: flex; align-items: center;">
                        <img src="@/assets/logoX.svg" alt="X" style="margin-right: 8px;" />
                        @NatashaGading
                    </a>
                </h4>
                <h4>
                    <a href="https://www.tokopedia.com/natashagading1" target="_blank" style="display: flex; align-items: center;">
                        <img src="@/assets/tokopedia.svg" alt="Tokopedia" style="margin-right: 8px;" />
                        @natashagading1
                    </a>
                </h4>
                <h4>
                    <a href="https://shopee.co.id/natashagadingkennel" target="_blank" style="display: flex; align-items: center;">
                        <img src="@/assets/shopee.svg" alt="Shopee" style="margin-right: 8px;" />
                        @natashagadingkennel
                    </a>
                </h4>
            </div>
        </div>

        <div class="info-box">
            <div class="info-item">
                <a href="https://wa.me/6281234187970">
                    <img src="@/assets/whatsapp.svg" alt="WhatsApp" class="info-icon" />
                </a>
                <h3>Contact</h3>
                <p>For pricing, availability, and visits, contact us on
                    <a href="https://wa.me/6281234187970">WhatsApp</a>
                </p>
            </div>
            <div class="divider"></div>
            <div class="info-item">
                <a href="https://maps.app.goo.gl/tVk6yXFbF63yUcXx7">
                    <img src="@/assets/location.svg" alt="Location" class="info-icon" />
                </a>
                <h3>Location</h3>
                <p>Visits available by appointment (booking required!), located in Kelapa Gading, Jakarta Utara. 
                    <a href="https://maps.app.goo.gl/tVk6yXFbF63yUcXx7">View on map</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact Us'
};
</script>

<style scoped>
.contact-us {
    padding: 15px;
    padding-bottom: 100px;
    font-family: "Inter-Regular", Helvetica;
    height: calc(100vh - 90px);
    overflow-y: auto;
    overflow-x: hidden;
}

.contact-us::-webkit-scrollbar {
    width: 6px;
}

.contact-us::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.contact-us::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0px;
}

.contact-us::-webkit-scrollbar-thumb:hover {
    background: #555;
}

h1 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 22px;
    font-family: "Inter-SemiBold", Helvetica;
    color: #333;
}

.social-media-section {
    margin-bottom: 20px;
}

.section-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 15px;
}

.line {
    height: 1px;
    background-color: #e0e0e0;
    flex: 1;
    max-width: 80px;
}

.section-header h3 {
    color: #666;
    font-size: 16px;
    margin: 0;
    white-space: nowrap;
}

.social-links {
    background-color: #f5f5f5;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    border: 1px solid #e0e0e0;
    max-width: 400px;
    margin: 0 auto;
}

.social-links h4 {
    display: flex;
    align-items: center;
    margin: 12px 0;
    font-size: 14px;
    padding: 8px 15px;
    border-radius: 25px;
    transition: background-color 0.2s;
}

.social-links h4:hover {
    background-color: #ffffff;
}

.social-links img {
    width: 20px;
    height: 20px;
    margin-right: 12px;
}

.social-links a {
    color: #333;
    text-decoration: none;
    transition: color 0.2s;
}

.social-links a:hover {
    color: #eb221e;
}

.info-box {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    margin-top: 20px;
    margin-bottom: 100px;
}

.info-item {
    text-align: center;
    padding: 8px 0;
}

.info-icon {
    width: 22px;
    height: 22px;
    margin-bottom: 4px;
}

.info-item h3 {
    font-size: 15px;
    margin: 4px 0;
}

.info-item p {
    color: #666;
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    padding: 0 10px;
}

.info-item a {
    color: #eb221e;
    text-decoration: none;
    font-weight: 500;
}

.info-item a:hover {
    text-decoration: underline;
}

.divider {
    margin: 8px 0;
    height: 1px;
    background-color: #e0e0e0;
}

/* Add media query for mobile devices */
@media screen and (max-width: 768px) {
    .contact-us {
        padding-bottom: 220px;
    }
    
    .info-box {
        margin-bottom: 150px;
    }
}
</style>
