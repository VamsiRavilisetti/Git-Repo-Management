import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git-repos-management',
  templateUrl: './git-repos-management.component.html',
  styleUrls: ['./git-repos-management.component.scss']
})
export class GitReposManagementComponent implements OnInit {

  constructor(public fb: FormBuilder, private http: HttpClient) { }

  repositories: any
  ngOnInit(): void {
    // api call to get all available repos for user 
    // this.http.get<any>('https://api.github.com/users/VamsiRavilisetti/repos').subscribe(data => {
    //   this.repositories = data;
    //   console.log(this.repositories)
    // })
    this.http.get<any>('https://api.github.com/users/timmywheels/repos').subscribe(data => {
      this.repositories = data;
      console.log(this.repositories)
    })
  }
  // validation for add repo form 
  repoForm = this.fb.group({
    owner: ['', Validators.required],
    name: ['', Validators.required]
  })

  // this function triggers when user clicks on add button after filing required data and pushes the data to the array of repositories
  onSubmit() {
    this.repositories.push(this.repoForm.value)
    this.http.post<any>('https://api.github.com/orgs/vamsi/repos', {
      org: 'ORG',
      name: 'Hello-World',
      description: 'This is your first repository',
      homepage: 'https://github.com',
      'private': false,
      has_issues: true,
      has_projects: true,
      has_wiki: true,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }).subscribe(data => {
      let postId = data.id;
    })
  }
  branches: any;
  selectedRepo: any;
  selectedIndex: any;
  // after selecting a repo this function tirggers and calls api for loading all the available branches for thet branch
  openBranch(repoName: any, index: any) {
    this.http.get<any>(`https://api.github.com/repos/timmywheels/${repoName}/branches`).subscribe(data => {
      this.branches = data;
      console.log(this.branches);
      this.selectedRepo = repoName;
      this.selectedIndex = index;
      this.branchSelected = true;
    })
  }

  // this function triggers when user tries to delete a selected repo 
  deleteRepo() {
    this.repositories.splice(this.selectedIndex, 1);
    this.branches = null;
  }
  issues: any = [];
  branchSelected: boolean = true;

  // this function triggers when user clicks on branch tab which will hide the issues branch 
  selectBranch() {
    this.branchSelected = true;
  }

  // this function triggers when user clicks on issues tab then will call apis to load all the available issues for that repo 
  loadIssues() {
    this.branchSelected = false;
    this.issues = []
    // this.http.get<any>(`https://api.github.com/repos/timmywheels/${this.selectedRepo}/issues`).subscribe(data => {
    this.http.get<any>(`https://api.github.com/repos/octocat/hello-world/issues`).subscribe((data: any) => {
      if (data.length == 0) {
        let issueNotFound = {
          name: "no issues found"
        }
        this.issues.push(issueNotFound)
      } else {
        this.issues = data;
        console.log(this.issues)
      }

    })
  }
}
