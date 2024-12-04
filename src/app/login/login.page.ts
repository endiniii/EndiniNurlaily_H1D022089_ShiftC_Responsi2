import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private auth: AngularFireAuth, private router: Router) {}

  async login() {
    try {
      // Login dengan email dan password
      await this.auth.signInWithEmailAndPassword(this.email, this.password);
      console.log('Login berhasil');
      this.router.navigate(['/home']); // Navigasi ke halaman home setelah login berhasil
    } catch (error: any) {
      // Menangani berbagai jenis error
      switch (error.code) {
        case 'auth/invalid-email':
          alert('Error: Email tidak valid.');
          break;
        case 'auth/user-disabled':
          alert('Error: Akun telah dinonaktifkan.');
          break;
        case 'auth/user-not-found':
          alert('Error: Pengguna tidak ditemukan.');
          break;
        case 'auth/wrong-password':
          alert('Error: Password salah.');
          break;
        default:
          alert('Error: ' + error.message);
      }
      console.error('Error during login:', error);
    }
  }
}
