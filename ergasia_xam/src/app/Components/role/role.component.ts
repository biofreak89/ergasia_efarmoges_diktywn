import { Component } from '@angular/core';
import { RoleService } from 'src/app/Services/role.service';
import { Role } from 'src/app/role';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent {
  rolelist : Role[]=[];
  newRole : Role = new Role(); //changing or creating new user
  creatingMode : boolean=true;
  constructor(private roleService : RoleService) {
    this.getAllRoles();
  }

  //get all from db
  getAllRoles(){
    this.roleService.getAll().subscribe((response : Role[]=>{
      this.roleList = response;
      }));
  }

  //delete role
  deleteRole(roleId : string){
    if (confirm("Delete this role?")){
      this.roleService.Delete(roleId).subscribe(()=>{
        alert("Role deleted!");
        window.location.reload();
      });
    }
  }
  //Create new role
  createRole(){
    const newRole = {
      roleName : this.newRole.roleName
    }
    this.roleService.Create(newRole).subscribe(()=>{
      alert("Role Created Successfully");
      window.location.reload();
    });
  }
  //Update role
  modifyRole(){
    this.roleService.Update(this.newRole).subscribe(()=>{
      alert("Role Updated Successfully");
      window.location.reload();
    })
  }
  //   verify
  openModel(role: Role = new Role()){
    if(role.id == ""){
      this.newRole = new Role();
    }else{
      this.creatingMode = false;
      this.newRole = role;
    }
  }
}