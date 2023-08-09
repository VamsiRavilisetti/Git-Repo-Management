import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitApiService } from './../git-api.service';


@Component({
  selector: 'app-commits-screen',
  templateUrl: './commits-screen.component.html',
  styleUrls: ['./commits-screen.component.scss']
})
export class CommitsScreenComponent implements OnInit {

  constructor(private route: ActivatedRoute, private GitApiService: GitApiService) { }

  repo: any;
  branch: any;
  commitData: any
  ngOnInit(): void {
    // for ggetting route paraments with repository name branch name for commits calling api
    this.repo = this.route.snapshot.params['repo'];
    this.branch = this.route.snapshot.params['branch'];
    // commits api call here with repo name and branch name from selected branch
    let url = `https://api.github.com/repos/${this.repo}/${this.branch}/commits`
    this.GitApiService.getData(url).subscribe(
      (data) => {
        this.commitData = data
      },
      (err) => { console.log("Error!: ", err) }
    )
  }
}
