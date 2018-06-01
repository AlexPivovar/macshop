package da.macshop.controller;

import da.macshop.entity.User;
import da.macshop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users")
    public List<User> listUser() {
        return userService.findAll();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/user")
    public User getOne(@RequestParam("id") Long id) {
        return userService.findById(id);
    }

    @PostMapping("/checks/check-in")
    public User saveUser(@RequestBody User user) {
        return userService.save(user);
    }

    @PostMapping("/checks/check-username")
    public boolean checkUsername(@RequestBody String username) {
        return userService.isUsernameFree(username);
    }

    @PostMapping("/checks/check-email")
    public boolean checkEmail(@RequestBody String email) {
        return userService.isEmailFree(email);
    }
}
