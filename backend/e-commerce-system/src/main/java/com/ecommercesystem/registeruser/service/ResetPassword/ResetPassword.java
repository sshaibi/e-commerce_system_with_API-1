package com.ecommercesystem.registeruser.service.ResetPassword;

import com.ecommercesystem.registeruser.Email.Email;
import com.ecommercesystem.registeruser.PasswordReset.PasswordReset;
import com.ecommercesystem.registeruser.dto.PasswordResetDto;

public interface ResetPassword {
    String addNewPassword(PasswordResetDto passwordResetDto);
}
