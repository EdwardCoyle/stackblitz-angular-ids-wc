import { TestBed } from '@angular/core/testing';
import { IdsBreadcrumbComponent } from './ids-breadcrumb.component';
describe('IdsBreadcrumbComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsBreadcrumbComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsBreadcrumbComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-breadcrumb.component.spec.js.map