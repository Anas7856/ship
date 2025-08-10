// =============================
// Email Service (Frontend Safe)
// =============================

// Use base URL without trailing slash to avoid "//" in requests
const API_BASE_URL = "https://serverg-lc8z.onrender.com";

// Main email sending function using backend API
export const sendAgreementEmail = async (formData, pdfBlob) => {
  try {
    // Validate PDF Blob
    if (!(pdfBlob instanceof Blob)) {
      console.error("Provided PDF is not a valid Blob:", pdfBlob);
      throw new Error("Invalid PDF blob provided");
    }

    // Validate required fields
    const requiredFields = [
      "carrierName",
      "usdotNumber",
      "phoneNumber",
      "email",
      "fullName",
      "title",
      "agreementDate",
      "paymentMethod",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error("Invalid email format");
    }

    // Prepare FormData for submission
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] != null && formData[key] !== "") {
        formDataToSend.append(key, formData[key]);
      }
    });

    // Add PDF attachment
    const filename = `Agreement_${formData.carrierName.replace(
      /[^a-zA-Z0-9]/g,
      "_"
    )}_${Date.now()}.pdf`;
    formDataToSend.append("agreement_pdf", pdfBlob, filename);

    // Debugging logs
    console.log(
      "📤 Sending Agreement to Backend:",
      `${API_BASE_URL}/api/send-agreement`
    );
    for (let pair of formDataToSend.entries()) {
      console.log(pair[0], pair[1]);
    }

    // Send to backend API
    const response = await fetch(`${API_BASE_URL}/api/send-agreement`, {
      method: "POST",
      body: formDataToSend,
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error("❌ Backend error:", result);
      throw new Error(
        result.message || result.error || "Failed to send agreement"
      );
    }

    console.log("✅ Agreement sent successfully:", result);

    return {
      success: true,
      agreementId: result.agreementId,
      submittedDate: result.submittedDate,
      messageId: result.emailResult?.messageId,
    };
  } catch (error) {
    console.error("Email sending failed:", error);

    // Fallback if backend is unreachable
    if (
      error.message.includes("fetch") ||
      error.message.includes("Failed to fetch")
    ) {
      console.warn("⚠ Backend unavailable, attempting fallback method...");
      return await sendEmailViaWeb3Forms(formData, pdfBlob);
    }

    throw new Error(`Failed to send email: ${error.message}`);
  }
};

// =============================
// Web3Forms Fallback Method
// =============================
const sendEmailViaWeb3Forms = async (formData, pdfBlob) => {
  try {
    const WEB3_FORMS_KEY = "ff60080c-a01f-4b68-a7cc-2f23b64bcdcf";

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", WEB3_FORMS_KEY);
    formDataToSend.append(
      "subject",
      `New Broker/Carrier Agreement - ${formData.carrierName}`
    );
    formDataToSend.append("from_name", formData.carrierName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("to", "Henry@vallhallalogisticllc.com");

    // Agreement details
    formDataToSend.append("carrier_name", formData.carrierName);
    formDataToSend.append("carrier_usdot", formData.usdotNumber);
    formDataToSend.append("carrier_phone", formData.phoneNumber);
    formDataToSend.append("carrier_email", formData.email);
    formDataToSend.append("signed_by", formData.fullName);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("agreement_date", formData.agreementDate);
    formDataToSend.append("payment_method", formData.paymentMethod);
    formDataToSend.append("bank_name", formData.bankName || "Not provided");
    formDataToSend.append(
      "account_type",
      formData.accountType || "Not provided"
    );

    // Generate IDs
    const agreementId = `VL-FALLBACK-${Date.now()}`;
    const submittedDate = new Date().toISOString();
    formDataToSend.append("agreement_id", agreementId);
    formDataToSend.append("submitted_date", submittedDate);

    // Message
    const message = generatePlainTextMessage(
      formData,
      agreementId,
      submittedDate
    );
    formDataToSend.append("message", message);

    // Attach PDF
    if (pdfBlob) {
      const filename = `Agreement_${formData.carrierName.replace(
        /[^a-zA-Z0-9]/g,
        "_"
      )}_${Date.now()}.pdf`;
      formDataToSend.append("attachment", pdfBlob, filename);
    }

    // Send via Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || "Web3Forms email sending failed");
    }

    console.log("✅ Web3Forms Fallback Sent:", result);

    return {
      success: true,
      response: result,
      agreementId,
      submittedDate,
    };
  } catch (error) {
    console.error("Web3Forms fallback failed:", error);
    throw error;
  }
};

// =============================
// Contact Form Email
// =============================
export const sendContactEmail = async (contactData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || result.error || "Failed to send contact message"
      );
    }

    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error("Contact email sending failed:", error);
    throw new Error(`Failed to send contact message: ${error.message}`);
  }
};

// =============================
// Test Email Functionality
// =============================
export const testEmailService = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/test-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || result.error || "Test email failed");
    }

    return { success: true, result };
  } catch (error) {
    console.error("Email test failed:", error);
    return { success: false, error: error.message };
  }
};

// =============================
// Generate Plain Text Message
// =============================
const generatePlainTextMessage = (formData, agreementId, submittedDate) =>
  `
NEW BROKER/CARRIER AGREEMENT SUBMITTED

CARRIER INFORMATION:
====================
Company Name: ${formData.carrierName}
USDOT/MC Number: ${formData.usdotNumber}
Phone: ${formData.phoneNumber}
Email: ${formData.email}

AGREEMENT DETAILS:
==================
Signed By: ${formData.fullName}
Title: ${formData.title}
Agreement Date: ${formData.agreementDate}
Payment Method: ${formData.paymentMethod}

BANKING INFORMATION:
====================
Bank Name: ${formData.bankName || "Not provided"}
Account Type: ${formData.accountType || "Not provided"}

SYSTEM INFORMATION:
===================
Agreement ID: ${agreementId}
Submitted: ${submittedDate}

NEXT STEPS:
===========
- Agreement will be reviewed within 24 hours
- Carrier will receive confirmation email once processed
- Setup carrier profile to start receiving loads

The signed broker/carrier agreement is attached as a PDF file for your review and processing.

---
Valhalla Logistics LLC
1255 Franklin Ave Suite 350, Garden City, NY 11530
Phone: 2204048003030 | Email: Henry@vallhallalogisticllc.com
USDOT# 4091738 | MC# 1558919
`.trim();

// =============================
// API Connection Check
// =============================
export const checkAPIConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    const result = await response.json();

    return {
      connected: response.ok,
      status: result.status,
      timestamp: result.timestamp,
    };
  } catch (error) {
    return { connected: false, error: error.message };
  }
};
