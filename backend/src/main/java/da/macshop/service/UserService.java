package da.macshop.service;

import da.macshop.entity.Role;
import da.macshop.entity.User;
import da.macshop.repository.UserRepository;
import da.macshop.utils.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.authentication.UserCredentials;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserService implements UserDetailsService {
    private UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptEncoder;

    @Autowired
    public UserService(UserRepository userRepository, BCryptPasswordEncoder bCryptEncoder) {
        this.userRepository = userRepository;
        this.bCryptEncoder = bCryptEncoder;
    }

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthority(user));
    }

    private Set<SimpleGrantedAuthority> getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        user.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getName()));
        });
        return authorities;
    }

    public List<User> findAll() {
        List<User> list = new ArrayList<>();
        userRepository.findAll().iterator().forEachRemaining(list::add);

        return list;
    }

    public void delete(long id) {
        userRepository.deleteById(id);
    }

    public User findOne(String username) {
        return userRepository.findByUsername(username);
    }

    public User findById(Long id) {
        return userRepository.findById(id).get();
    }

    public User save(User user) {
        User newUser = new User();
        Role userRole = new Role("USER");
        HashSet<Role> roles = new HashSet<>();

        roles.add(userRole);

        newUser.setUsername(user.getUsername());
        newUser.setEmail(user.getEmail());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setPassword(bCryptEncoder.encode(user.getPassword()));
        newUser.setRoles(roles);
        newUser.setRegistrationDate(LocalDateTime.now().format(Utilities.getFormatter()));

        return userRepository.save(newUser);
    }

    public boolean isUsernameFree(String username) {
        User user = userRepository.findByUsername(username);
        return user == null;
    }

    public boolean isEmailFree(String email) {
        List<User> users = findAll();

        for (User user : users) {
            if (user.getEmail().equals(email)) {
                return false;
            }
        }

        return true;
    }
}
