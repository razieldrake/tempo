import { Component, OnInit } from '@angular/core';
import {JobServiceService} from '../../service/job-service.service';
import {Job} from '../../entity/job';


@Component({
  selector: 'app-job-comp',
  templateUrl: './job-comp.component.html',
  styleUrls: ['./job-comp.component.css']
})



export class JobCompComponent implements OnInit {
  jobs: Job[];
  selectedJob:Job;
  
  constructor(private jobService: JobServiceService) { }
  
  public getJobs(): void{

    this.jobService.getAll().subscribe(jobs => this.jobs = jobs)
  }
  public getOneJob(job: string ): void{

    this.jobService.getOne(job).subscribe(job => this.selectedJob = job);
  }

  public onSelectJob(job:Job):void {
    if (job){
    this.selectedJob = job;
    
    }
  }

  public ngOnInit() {

    this.getJobs();
    
  }

}
