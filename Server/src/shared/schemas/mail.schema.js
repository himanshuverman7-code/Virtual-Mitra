export const getOtpMailOptions = (to, otp) => {
  return {
    from: `"Virtual Mitra" <${process.env.EMAIL}>`,
    to,
    subject: "Your OTP Code",
    
    text: `Your OTP is ${otp}. It will expire in 3 minutes.`,

    html: `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
        <h2 style="color: #333;">Verify Your Email</h2>
        <p style="font-size: 16px;">Use the OTP below to continue:</p>
        
        <div style="
          display: inline-block;
          padding: 12px 24px;
          font-size: 24px;
          font-weight: bold;
          color: #fff;
          background-color: #4CAF50;
          border-radius: 6px;
          letter-spacing: 4px;
        ">
          ${otp}
        </div>

        <p style="margin-top: 20px; font-size: 14px; color: #777;">
          This OTP will expire in 5 minutes.
        </p>

        <p style="font-size: 12px; color: #aaa;">
          If you didn’t request this, you can ignore this email.
        </p>
      </div>
    `,
  };
};